import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-argentina');
}

export default function NepreniaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-argentina" />;
}
