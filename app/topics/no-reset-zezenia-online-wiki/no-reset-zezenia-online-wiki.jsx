import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-wiki');
}

export default function NoResetZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-wiki" />;
}
