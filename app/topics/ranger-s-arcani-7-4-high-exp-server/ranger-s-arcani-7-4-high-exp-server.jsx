import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-high-exp-server');
}

export default function RangerSArcani74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-high-exp-server" />;
}
