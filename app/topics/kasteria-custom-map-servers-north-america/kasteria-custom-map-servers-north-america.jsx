import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-north-america');
}

export default function KasteriaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-north-america" />;
}
