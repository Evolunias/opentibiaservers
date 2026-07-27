import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-low-exp-server');
}

export default function RangerSArcani12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-low-exp-server" />;
}
