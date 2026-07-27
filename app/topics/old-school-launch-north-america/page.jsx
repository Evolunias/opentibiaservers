import OldSchoolLaunchNorthAmericaKeywordPage, { generateMetadata } from './old-school-launch-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchNorthAmericaKeywordPage />;
}
