import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-real-map-server-sweden');
}

export default function RealestaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-real-map-server-sweden" />;
}
