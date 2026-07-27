import OldSchoolLaunchEuropeKeywordPage, { generateMetadata } from './old-school-launch-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchEuropeKeywordPage />;
}
