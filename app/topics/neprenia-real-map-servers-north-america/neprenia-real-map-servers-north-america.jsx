import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-north-america');
}

export default function NepreniaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-north-america" />;
}
