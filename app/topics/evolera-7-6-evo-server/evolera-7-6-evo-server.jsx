import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-evo-server');
}

export default function Evolera76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-evo-server" />;
}
