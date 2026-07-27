import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-similar-servers');
}

export default function NtoStarSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="nto-star-similar-servers" />;
}
