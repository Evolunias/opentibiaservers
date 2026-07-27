import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-1-low-exp-server');
}

export default function RangerSArcani71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-1-low-exp-server" />;
}
