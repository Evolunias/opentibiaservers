import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-evo-server');
}

export default function Evolera71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-evo-server" />;
}
