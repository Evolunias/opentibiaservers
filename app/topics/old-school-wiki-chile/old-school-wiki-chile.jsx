import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-wiki-chile');
}

export default function OldSchoolWikiChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-wiki-chile" />;
}
