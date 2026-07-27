import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-wiki');
}

export default function BestDuraOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-wiki" />;
}
