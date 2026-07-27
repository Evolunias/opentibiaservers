import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-server-sweden');
}

export default function ThaisotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-server-sweden" />;
}
