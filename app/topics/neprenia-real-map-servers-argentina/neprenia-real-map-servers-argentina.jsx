import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-argentina');
}

export default function NepreniaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-argentina" />;
}
