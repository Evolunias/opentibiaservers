import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-wiki');
}

export default function HighrateImperianicWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-wiki" />;
}
