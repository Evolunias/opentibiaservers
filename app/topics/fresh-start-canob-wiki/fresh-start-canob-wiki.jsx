import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-wiki');
}

export default function FreshStartCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-wiki" />;
}
