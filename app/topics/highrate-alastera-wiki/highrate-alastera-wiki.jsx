import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-wiki');
}

export default function HighrateAlasteraWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-wiki" />;
}
