import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-wiki');
}

export default function CurrentArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-wiki" />;
}
