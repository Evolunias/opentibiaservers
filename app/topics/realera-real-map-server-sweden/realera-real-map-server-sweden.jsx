import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-real-map-server-sweden');
}

export default function RealeraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-real-map-server-sweden" />;
}
