import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-argentina');
}

export default function OldSchoolWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-argentina" />;
}
