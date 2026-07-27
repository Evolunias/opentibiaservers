import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-wiki');
}

export default function PopularTibianusWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-wiki" />;
}
