import OldSchoolLaunchUkKeywordPage, { generateMetadata } from './old-school-launch-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchUkKeywordPage />;
}
