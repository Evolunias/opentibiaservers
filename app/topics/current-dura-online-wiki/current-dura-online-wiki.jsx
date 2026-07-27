import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-wiki');
}

export default function CurrentDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-wiki" />;
}
