import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-latin-america');
}

export default function NepreniaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-latin-america" />;
}
