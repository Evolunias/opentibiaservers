import OldSchoolOpenTibiaServerChileKeywordPage, { generateMetadata } from './old-school-open-tibia-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOpenTibiaServerChileKeywordPage />;
}
