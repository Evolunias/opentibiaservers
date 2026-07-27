import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-south-america');
}

export default function OldSchoolWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-south-america" />;
}
