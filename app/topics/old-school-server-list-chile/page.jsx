import OldSchoolServerListChileKeywordPage, { generateMetadata } from './old-school-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServerListChileKeywordPage />;
}
