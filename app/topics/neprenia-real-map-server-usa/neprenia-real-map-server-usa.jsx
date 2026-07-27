import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-usa');
}

export default function NepreniaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-usa" />;
}
