import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-canada');
}

export default function KasteriaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-canada" />;
}
