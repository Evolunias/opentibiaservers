import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-wiki');
}

export default function HighrateNilotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-wiki" />;
}
