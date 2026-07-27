import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-uk');
}

export default function ElderaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-uk" />;
}
