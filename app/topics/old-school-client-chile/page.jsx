import OldSchoolClientChileKeywordPage, { generateMetadata } from './old-school-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClientChileKeywordPage />;
}
