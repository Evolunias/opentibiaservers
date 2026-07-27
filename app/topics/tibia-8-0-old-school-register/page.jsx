import Tibia80OldSchoolRegisterKeywordPage, { generateMetadata } from './tibia-8-0-old-school-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolRegisterKeywordPage />;
}
