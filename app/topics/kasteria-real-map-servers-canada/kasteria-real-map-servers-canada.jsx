import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-canada');
}

export default function KasteriaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-canada" />;
}
