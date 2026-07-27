import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-wiki');
}

export default function HighrateNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-wiki" />;
}
