import OldSchoolServersChileKeywordPage, { generateMetadata } from './old-school-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolServersChileKeywordPage />;
}
