import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-brazil');
}

export default function ElderaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-brazil" />;
}
