import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-wiki');
}

export default function HighrateDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-wiki" />;
}
