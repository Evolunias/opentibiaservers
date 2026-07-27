import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-europe');
}

export default function ElderaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-europe" />;
}
