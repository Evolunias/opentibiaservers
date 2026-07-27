import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-evo-server');
}

export default function Evolera14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-evo-server" />;
}
