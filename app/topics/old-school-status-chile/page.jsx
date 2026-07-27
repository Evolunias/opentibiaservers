import OldSchoolStatusChileKeywordPage, { generateMetadata } from './old-school-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolStatusChileKeywordPage />;
}
