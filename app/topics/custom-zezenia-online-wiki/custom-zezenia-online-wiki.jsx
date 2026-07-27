import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-wiki');
}

export default function CustomZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-wiki" />;
}
