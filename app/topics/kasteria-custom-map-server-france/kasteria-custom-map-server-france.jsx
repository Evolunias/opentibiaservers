import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-france');
}

export default function KasteriaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-france" />;
}
