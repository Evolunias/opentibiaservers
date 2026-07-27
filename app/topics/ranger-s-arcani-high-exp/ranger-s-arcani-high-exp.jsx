import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-high-exp');
}

export default function RangerSArcaniHighExpKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-high-exp" />;
}
