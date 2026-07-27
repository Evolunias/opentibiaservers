import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-mexico');
}

export default function OldSchoolWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-mexico" />;
}
