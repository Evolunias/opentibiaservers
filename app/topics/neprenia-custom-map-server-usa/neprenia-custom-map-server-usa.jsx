import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-usa');
}

export default function NepreniaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-usa" />;
}
