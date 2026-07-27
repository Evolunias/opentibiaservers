import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-wiki');
}

export default function BestZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-wiki" />;
}
