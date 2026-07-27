import OldSchoolEmpirebrClientKeywordPage, { generateMetadata } from './old-school-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEmpirebrClientKeywordPage />;
}
