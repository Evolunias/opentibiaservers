import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-wiki');
}

export default function LowrateDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-wiki" />;
}
