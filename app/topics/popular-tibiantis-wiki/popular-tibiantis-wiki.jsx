import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-wiki');
}

export default function PopularTibiantisWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-wiki" />;
}
