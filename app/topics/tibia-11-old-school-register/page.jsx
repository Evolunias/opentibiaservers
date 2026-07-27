import Tibia11OldSchoolRegisterKeywordPage, { generateMetadata } from './tibia-11-old-school-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolRegisterKeywordPage />;
}
