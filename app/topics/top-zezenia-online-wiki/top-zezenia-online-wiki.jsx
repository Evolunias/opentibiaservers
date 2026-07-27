import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-wiki');
}

export default function TopZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-wiki" />;
}
