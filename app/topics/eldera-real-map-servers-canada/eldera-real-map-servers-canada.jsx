import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-canada');
}

export default function ElderaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-canada" />;
}
