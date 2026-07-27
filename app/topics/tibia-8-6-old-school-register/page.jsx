import Tibia86OldSchoolRegisterKeywordPage, { generateMetadata } from './tibia-8-6-old-school-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolRegisterKeywordPage />;
}
