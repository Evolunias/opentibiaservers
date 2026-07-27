import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-wiki');
}

export default function HighrateAureraGlobalWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-wiki" />;
}
