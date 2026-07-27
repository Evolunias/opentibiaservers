import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-evo-server');
}

export default function Evolera86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-evo-server" />;
}
