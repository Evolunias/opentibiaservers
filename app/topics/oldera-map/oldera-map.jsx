import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-map');
}

export default function OlderaMapKeywordPage() {
  return <StaticKeywordPage slug="oldera-map" />;
}
