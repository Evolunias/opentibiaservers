import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-wiki');
}

export default function HighrateCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-wiki" />;
}
