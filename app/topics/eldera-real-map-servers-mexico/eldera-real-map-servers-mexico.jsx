import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-mexico');
}

export default function ElderaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-mexico" />;
}
