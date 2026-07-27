import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-canada');
}

export default function NepreniaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-canada" />;
}
