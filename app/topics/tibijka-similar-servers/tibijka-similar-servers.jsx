import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-similar-servers');
}

export default function TibijkaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-similar-servers" />;
}
