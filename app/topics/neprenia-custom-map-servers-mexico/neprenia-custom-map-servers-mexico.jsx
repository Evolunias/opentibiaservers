import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-mexico');
}

export default function NepreniaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-mexico" />;
}
