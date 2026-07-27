import OldSchoolOtServerChileKeywordPage, { generateMetadata } from './old-school-ot-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerChileKeywordPage />;
}
