import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-argentina');
}

export default function NepreniaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-argentina" />;
}
