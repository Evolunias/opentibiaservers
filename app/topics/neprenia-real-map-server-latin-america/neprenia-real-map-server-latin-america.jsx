import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-latin-america');
}

export default function NepreniaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-latin-america" />;
}
