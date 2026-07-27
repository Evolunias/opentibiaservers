import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-europe');
}

export default function ElderaRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-europe" />;
}
