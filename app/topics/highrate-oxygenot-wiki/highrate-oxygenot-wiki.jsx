import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-wiki');
}

export default function HighrateOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-wiki" />;
}
