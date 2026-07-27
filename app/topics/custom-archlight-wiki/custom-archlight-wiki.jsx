import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-wiki');
}

export default function CustomArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-wiki" />;
}
