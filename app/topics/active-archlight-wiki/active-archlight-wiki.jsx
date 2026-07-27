import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-wiki');
}

export default function ActiveArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-wiki" />;
}
