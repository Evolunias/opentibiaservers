import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-wiki');
}

export default function HighrateZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-wiki" />;
}
