import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-wiki');
}

export default function BestArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-wiki" />;
}
