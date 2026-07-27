import OldSchoolEmpirebrOtsKeywordPage, { generateMetadata } from './old-school-empirebr-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrOtsKeywordPage />;
}
