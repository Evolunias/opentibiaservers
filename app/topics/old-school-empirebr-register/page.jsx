import OldSchoolEmpirebrRegisterKeywordPage, { generateMetadata } from './old-school-empirebr-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrRegisterKeywordPage />;
}
