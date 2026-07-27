import Tibia12OldSchoolLaunchKeywordPage, { generateMetadata } from './tibia-12-old-school-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolLaunchKeywordPage />;
}
