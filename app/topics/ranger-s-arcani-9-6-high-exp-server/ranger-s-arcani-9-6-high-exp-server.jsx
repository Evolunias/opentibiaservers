import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-high-exp-server');
}

export default function RangerSArcani96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-high-exp-server" />;
}
