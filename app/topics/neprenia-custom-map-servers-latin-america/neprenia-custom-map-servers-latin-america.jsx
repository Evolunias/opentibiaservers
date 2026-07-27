import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-latin-america');
}

export default function NepreniaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-latin-america" />;
}
