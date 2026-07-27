import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-wiki');
}

export default function NewArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-wiki" />;
}
