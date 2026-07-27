import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-evo-server');
}

export default function Evolera11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-evo-server" />;
}
