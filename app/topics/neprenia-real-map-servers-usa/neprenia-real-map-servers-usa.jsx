import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-usa');
}

export default function NepreniaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-usa" />;
}
