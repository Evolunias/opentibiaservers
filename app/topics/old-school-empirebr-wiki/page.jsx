import OldSchoolEmpirebrWikiKeywordPage, { generateMetadata } from './old-school-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrWikiKeywordPage />;
}
