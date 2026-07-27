import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-wiki');
}

export default function NewSeasonArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-wiki" />;
}
