import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-similar-servers');
}

export default function ThorniaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-similar-servers" />;
}
