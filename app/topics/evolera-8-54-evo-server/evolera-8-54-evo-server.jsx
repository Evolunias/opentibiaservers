import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-54-evo-server');
}

export default function Evolera854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-54-evo-server" />;
}
