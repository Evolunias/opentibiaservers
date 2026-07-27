import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-archlight-wiki');
}

export default function OldSchoolArchlightWikiKeywordPage() {
  return <StaticKeywordPage slug="old-school-archlight-wiki" />;
}
