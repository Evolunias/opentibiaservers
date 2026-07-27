import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-wiki');
}

export default function HighrateEvoleraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-wiki" />;
}
