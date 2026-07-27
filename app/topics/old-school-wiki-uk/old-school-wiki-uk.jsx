import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-uk');
}

export default function OldSchoolWikiUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-uk" />;
}
