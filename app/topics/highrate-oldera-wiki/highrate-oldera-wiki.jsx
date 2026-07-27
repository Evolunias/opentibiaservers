import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-wiki');
}

export default function HighrateOlderaWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-wiki" />;
}
