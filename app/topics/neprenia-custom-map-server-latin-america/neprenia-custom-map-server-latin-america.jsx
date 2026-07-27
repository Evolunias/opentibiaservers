import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-latin-america');
}

export default function NepreniaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-latin-america" />;
}
