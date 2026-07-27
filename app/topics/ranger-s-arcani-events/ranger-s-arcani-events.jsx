import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-events');
}

export default function RangerSArcaniEventsKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-events" />;
}
