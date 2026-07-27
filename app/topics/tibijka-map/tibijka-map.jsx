import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-map');
}

export default function TibijkaMapKeywordPage() {
  return <StaticKeywordPage slug="tibijka-map" />;
}
