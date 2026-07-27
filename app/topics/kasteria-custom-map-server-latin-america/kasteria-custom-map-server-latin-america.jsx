import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-latin-america');
}

export default function KasteriaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-latin-america" />;
}
