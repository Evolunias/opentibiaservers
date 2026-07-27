import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-wiki');
}

export default function HighrateThaisotWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-wiki" />;
}
