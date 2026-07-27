import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-uk');
}

export default function ElderaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-uk" />;
}
