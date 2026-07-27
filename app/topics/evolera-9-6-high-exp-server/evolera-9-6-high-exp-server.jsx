import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-high-exp-server');
}

export default function Evolera96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-high-exp-server" />;
}
