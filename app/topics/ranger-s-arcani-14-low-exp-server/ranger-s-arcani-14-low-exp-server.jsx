import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-low-exp-server');
}

export default function RangerSArcani14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-low-exp-server" />;
}
