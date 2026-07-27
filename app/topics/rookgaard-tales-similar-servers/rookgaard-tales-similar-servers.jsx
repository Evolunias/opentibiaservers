import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-similar-servers');
}

export default function RookgaardTalesSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-similar-servers" />;
}
