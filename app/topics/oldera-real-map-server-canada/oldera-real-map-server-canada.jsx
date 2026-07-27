import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-canada');
}

export default function OlderaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-canada" />;
}
