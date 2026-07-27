import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-canada');
}

export default function OlderaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-canada" />;
}
