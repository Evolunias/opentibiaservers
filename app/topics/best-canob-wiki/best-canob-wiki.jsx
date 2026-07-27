import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-wiki');
}

export default function BestCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="best-canob-wiki" />;
}
