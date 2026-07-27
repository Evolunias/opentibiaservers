import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-latin-america');
}

export default function OldSchoolWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-latin-america" />;
}
