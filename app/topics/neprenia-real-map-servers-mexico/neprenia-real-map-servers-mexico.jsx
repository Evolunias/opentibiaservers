import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-mexico');
}

export default function NepreniaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-mexico" />;
}
