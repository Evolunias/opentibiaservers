import OldSchoolEmpirebrGuideKeywordPage, { generateMetadata } from './old-school-empirebr-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrGuideKeywordPage />;
}
