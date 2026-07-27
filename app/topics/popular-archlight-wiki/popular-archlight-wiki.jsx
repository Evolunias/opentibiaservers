import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-wiki');
}

export default function PopularArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-wiki" />;
}
