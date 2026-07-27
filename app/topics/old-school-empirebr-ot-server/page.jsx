import OldSchoolEmpirebrOtServerKeywordPage, { generateMetadata } from './old-school-empirebr-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrOtServerKeywordPage />;
}
