import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-wiki');
}

export default function HighrateClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-wiki" />;
}
