import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-north-america');
}

export default function KasteriaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-north-america" />;
}
