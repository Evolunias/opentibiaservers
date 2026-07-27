import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map');
}

export default function ElderaRealMapKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map" />;
}
