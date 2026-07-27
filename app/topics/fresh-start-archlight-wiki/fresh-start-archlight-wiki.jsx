import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-wiki');
}

export default function FreshStartArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-wiki" />;
}
