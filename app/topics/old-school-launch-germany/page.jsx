import OldSchoolLaunchGermanyKeywordPage, { generateMetadata } from './old-school-launch-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchGermanyKeywordPage />;
}
