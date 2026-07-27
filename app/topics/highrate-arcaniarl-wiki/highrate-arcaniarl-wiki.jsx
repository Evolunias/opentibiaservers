import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-wiki');
}

export default function HighrateArcaniarlWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-wiki" />;
}
