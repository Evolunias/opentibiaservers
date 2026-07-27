import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-wiki');
}

export default function OfficialZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-wiki" />;
}
