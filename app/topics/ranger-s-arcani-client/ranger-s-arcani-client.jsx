import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-client');
}

export default function RangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-client" />;
}
