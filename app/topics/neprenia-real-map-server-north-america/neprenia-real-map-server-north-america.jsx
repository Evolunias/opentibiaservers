import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-north-america');
}

export default function NepreniaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-north-america" />;
}
