import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-similar-servers');
}

export default function ArcaniarlSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-similar-servers" />;
}
