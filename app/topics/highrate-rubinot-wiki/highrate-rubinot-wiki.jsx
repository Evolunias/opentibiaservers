import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-wiki');
}

export default function HighrateRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-wiki" />;
}
