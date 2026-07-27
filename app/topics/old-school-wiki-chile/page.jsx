import OldSchoolWikiChileKeywordPage, { generateMetadata } from './old-school-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiChileKeywordPage />;
}
