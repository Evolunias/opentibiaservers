import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-north-america');
}

export default function ElderaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-north-america" />;
}
