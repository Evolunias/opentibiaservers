import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-usa');
}

export default function ElderaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-usa" />;
}
