import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-wiki');
}

export default function OfficialArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-wiki" />;
}
