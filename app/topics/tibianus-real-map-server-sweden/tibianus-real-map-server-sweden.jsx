import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-sweden');
}

export default function TibianusRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-sweden" />;
}
