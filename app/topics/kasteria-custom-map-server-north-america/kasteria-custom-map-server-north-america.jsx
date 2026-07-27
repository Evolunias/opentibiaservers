import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-north-america');
}

export default function KasteriaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-north-america" />;
}
