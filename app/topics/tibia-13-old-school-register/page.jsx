import Tibia13OldSchoolRegisterKeywordPage, { generateMetadata } from './tibia-13-old-school-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolRegisterKeywordPage />;
}
