import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-sweden');
}

export default function NepreniaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-sweden" />;
}
