import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-wiki');
}

export default function HighrateUnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-wiki" />;
}
