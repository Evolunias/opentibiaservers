import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-poland');
}

export default function OldSchoolWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-poland" />;
}
