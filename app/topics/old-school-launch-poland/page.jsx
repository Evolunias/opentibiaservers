import OldSchoolLaunchPolandKeywordPage, { generateMetadata } from './old-school-launch-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchPolandKeywordPage />;
}
