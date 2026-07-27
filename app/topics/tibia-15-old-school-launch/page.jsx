import Tibia15OldSchoolLaunchKeywordPage, { generateMetadata } from './tibia-15-old-school-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolLaunchKeywordPage />;
}
