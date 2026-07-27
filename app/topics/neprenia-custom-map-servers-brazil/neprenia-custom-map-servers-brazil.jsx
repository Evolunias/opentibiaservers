import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-brazil');
}

export default function NepreniaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-brazil" />;
}
