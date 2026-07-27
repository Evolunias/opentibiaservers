import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-evo-server-france');
}

export default function KasteriaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-evo-server-france" />;
}
