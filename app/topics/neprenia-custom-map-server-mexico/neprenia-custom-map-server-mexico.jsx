import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-mexico');
}

export default function NepreniaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-mexico" />;
}
