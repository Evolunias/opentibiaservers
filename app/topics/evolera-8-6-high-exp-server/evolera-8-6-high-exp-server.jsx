import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-high-exp-server');
}

export default function Evolera86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-high-exp-server" />;
}
