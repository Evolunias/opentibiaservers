import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-wiki');
}

export default function PopularTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-wiki" />;
}
