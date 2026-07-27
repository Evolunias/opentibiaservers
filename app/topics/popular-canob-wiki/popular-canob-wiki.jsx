import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-wiki');
}

export default function PopularCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-wiki" />;
}
