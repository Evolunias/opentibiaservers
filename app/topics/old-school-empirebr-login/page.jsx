import OldSchoolEmpirebrLoginKeywordPage, { generateMetadata } from './old-school-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrLoginKeywordPage />;
}
