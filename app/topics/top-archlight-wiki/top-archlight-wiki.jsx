import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-wiki');
}

export default function TopArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-wiki" />;
}
