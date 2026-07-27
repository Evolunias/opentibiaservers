import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-real-map-server-sweden');
}

export default function UnlineRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-real-map-server-sweden" />;
}
