import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-real-map-server-sweden');
}

export default function LumineraRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-real-map-server-sweden" />;
}
