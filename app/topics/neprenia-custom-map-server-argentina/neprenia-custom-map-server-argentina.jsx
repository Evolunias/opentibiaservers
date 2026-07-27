import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-argentina');
}

export default function NepreniaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-argentina" />;
}
