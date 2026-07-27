import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-wiki');
}

export default function HighrateAmeriaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-wiki" />;
}
