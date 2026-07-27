import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-wiki');
}

export default function HighrateRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-wiki" />;
}
