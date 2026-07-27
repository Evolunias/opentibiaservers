import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-brazil');
}

export default function NepreniaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-brazil" />;
}
