import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-evo-server');
}

export default function Evolera13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-evo-server" />;
}
