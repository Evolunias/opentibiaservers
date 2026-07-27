import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-usa');
}

export default function KasteriaEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-usa" />;
}
