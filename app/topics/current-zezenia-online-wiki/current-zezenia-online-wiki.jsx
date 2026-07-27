import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-wiki');
}

export default function CurrentZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-wiki" />;
}
