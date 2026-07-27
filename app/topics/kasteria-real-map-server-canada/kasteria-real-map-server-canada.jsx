import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-canada');
}

export default function KasteriaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-canada" />;
}
