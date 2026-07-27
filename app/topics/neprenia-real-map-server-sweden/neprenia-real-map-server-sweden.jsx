import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-sweden');
}

export default function NepreniaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-sweden" />;
}
