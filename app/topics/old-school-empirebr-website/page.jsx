import OldSchoolEmpirebrWebsiteKeywordPage, { generateMetadata } from './old-school-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrWebsiteKeywordPage />;
}
