import OldSchoolEmpirebrServerKeywordPage, { generateMetadata } from './old-school-empirebr-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrServerKeywordPage />;
}
