import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-sweden');
}

export default function EvoleraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-sweden" />;
}
