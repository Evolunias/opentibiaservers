import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-high-exp-server');
}

export default function RangerSArcani12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-high-exp-server" />;
}
