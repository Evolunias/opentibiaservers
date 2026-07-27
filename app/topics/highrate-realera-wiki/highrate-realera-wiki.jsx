import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-wiki');
}

export default function HighrateRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-wiki" />;
}
