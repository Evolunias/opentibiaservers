import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-germany');
}

export default function OldSchoolWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-germany" />;
}
