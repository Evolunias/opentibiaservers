import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-wiki');
}

export default function LowrateZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-wiki" />;
}
