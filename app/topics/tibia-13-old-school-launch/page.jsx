import Tibia13OldSchoolLaunchKeywordPage, { generateMetadata } from './tibia-13-old-school-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolLaunchKeywordPage />;
}
