import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-usa');
}

export default function OlderaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-usa" />;
}
