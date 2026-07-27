import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-high-exp-server');
}

export default function RangerSArcani13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-high-exp-server" />;
}
