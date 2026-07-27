import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-south-america');
}

export default function ElderaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-south-america" />;
}
