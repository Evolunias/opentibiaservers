import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-wiki');
}

export default function ActiveZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-wiki" />;
}
