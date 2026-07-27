import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-germany');
}

export default function ElderaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-germany" />;
}
