import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-canada');
}

export default function ElderaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-canada" />;
}
