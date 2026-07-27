import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-wiki');
}

export default function PopularZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-wiki" />;
}
