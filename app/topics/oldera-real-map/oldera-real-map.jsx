import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map');
}

export default function OlderaRealMapKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map" />;
}
