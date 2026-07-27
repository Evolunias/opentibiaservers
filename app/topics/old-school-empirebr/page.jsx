import OldSchoolEmpirebrKeywordPage, { generateMetadata } from './old-school-empirebr';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrKeywordPage />;
}
