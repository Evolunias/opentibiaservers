import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-north-america');
}

export default function OldSchoolWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-north-america" />;
}
