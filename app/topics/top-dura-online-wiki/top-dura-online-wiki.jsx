import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-wiki');
}

export default function TopDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-wiki" />;
}
