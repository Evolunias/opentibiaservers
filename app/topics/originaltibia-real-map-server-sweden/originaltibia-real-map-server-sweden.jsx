import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-server-sweden');
}

export default function OriginaltibiaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-server-sweden" />;
}
