import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-low-exp-server');
}

export default function RangerSArcani76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-low-exp-server" />;
}
