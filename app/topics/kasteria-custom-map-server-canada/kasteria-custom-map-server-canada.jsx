import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-canada');
}

export default function KasteriaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-canada" />;
}
