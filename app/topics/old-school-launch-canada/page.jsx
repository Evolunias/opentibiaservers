import OldSchoolLaunchCanadaKeywordPage, { generateMetadata } from './old-school-launch-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchCanadaKeywordPage />;
}
