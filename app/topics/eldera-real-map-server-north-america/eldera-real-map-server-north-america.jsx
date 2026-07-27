import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-north-america');
}

export default function ElderaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-north-america" />;
}
