import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-north-america');
}

export default function NepreniaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-north-america" />;
}
