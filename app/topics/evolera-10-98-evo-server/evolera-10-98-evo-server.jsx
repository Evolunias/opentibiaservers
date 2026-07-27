import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-evo-server');
}

export default function Evolera1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-evo-server" />;
}
