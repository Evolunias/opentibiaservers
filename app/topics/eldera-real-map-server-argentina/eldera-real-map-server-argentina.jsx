import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-argentina');
}

export default function ElderaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-argentina" />;
}
