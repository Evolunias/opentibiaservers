import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-wiki');
}

export default function HighrateKasteriaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-wiki" />;
}
