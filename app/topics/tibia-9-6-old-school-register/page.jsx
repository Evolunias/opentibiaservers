import Tibia96OldSchoolRegisterKeywordPage, { generateMetadata } from './tibia-9-6-old-school-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolRegisterKeywordPage />;
}
