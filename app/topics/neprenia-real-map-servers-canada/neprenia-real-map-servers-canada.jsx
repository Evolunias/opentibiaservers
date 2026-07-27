import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-canada');
}

export default function NepreniaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-canada" />;
}
