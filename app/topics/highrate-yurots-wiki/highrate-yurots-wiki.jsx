import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-wiki');
}

export default function HighrateYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-wiki" />;
}
