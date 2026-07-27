import Tibia11OldSchoolLaunchKeywordPage, { generateMetadata } from './tibia-11-old-school-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolLaunchKeywordPage />;
}
