import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-real-map-server-sweden');
}

export default function OxygenotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-real-map-server-sweden" />;
}
