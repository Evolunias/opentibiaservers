import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-wiki');
}

export default function HighrateCarlinotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-wiki" />;
}
