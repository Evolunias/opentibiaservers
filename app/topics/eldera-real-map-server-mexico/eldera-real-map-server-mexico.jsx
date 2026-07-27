import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-mexico');
}

export default function ElderaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-mexico" />;
}
