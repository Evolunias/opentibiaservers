import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-usa');
}

export default function ElderaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-usa" />;
}
