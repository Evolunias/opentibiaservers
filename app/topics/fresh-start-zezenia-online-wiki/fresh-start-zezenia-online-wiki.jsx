import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-wiki');
}

export default function FreshStartZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-wiki" />;
}
