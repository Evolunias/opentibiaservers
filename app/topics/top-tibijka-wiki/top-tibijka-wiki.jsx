import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-wiki');
}

export default function TopTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-wiki" />;
}
