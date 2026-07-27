import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-wiki');
}

export default function NewZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-wiki" />;
}
