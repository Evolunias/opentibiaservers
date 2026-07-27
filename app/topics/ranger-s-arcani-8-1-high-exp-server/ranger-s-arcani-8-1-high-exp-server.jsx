import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-1-high-exp-server');
}

export default function RangerSArcani81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-1-high-exp-server" />;
}
