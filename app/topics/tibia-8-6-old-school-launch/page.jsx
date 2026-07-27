import Tibia86OldSchoolLaunchKeywordPage, { generateMetadata } from './tibia-8-6-old-school-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolLaunchKeywordPage />;
}
