import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-server-south-america');
}

export default function ElderaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-server-south-america" />;
}
