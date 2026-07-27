import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-brazil');
}

export default function NepreniaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-brazil" />;
}
