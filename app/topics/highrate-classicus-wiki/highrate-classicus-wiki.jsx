import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-wiki');
}

export default function HighrateClassicusWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-wiki" />;
}
