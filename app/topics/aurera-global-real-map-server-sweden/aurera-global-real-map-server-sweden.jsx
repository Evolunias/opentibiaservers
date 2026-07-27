import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-sweden');
}

export default function AureraGlobalRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-sweden" />;
}
