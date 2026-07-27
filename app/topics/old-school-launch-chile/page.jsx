import OldSchoolLaunchChileKeywordPage, { generateMetadata } from './old-school-launch-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchChileKeywordPage />;
}
