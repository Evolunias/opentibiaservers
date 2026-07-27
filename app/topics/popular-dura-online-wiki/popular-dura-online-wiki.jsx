import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-wiki');
}

export default function PopularDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-wiki" />;
}
