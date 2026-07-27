import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-4-low-exp-server');
}

export default function RangerSArcani84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-4-low-exp-server" />;
}
