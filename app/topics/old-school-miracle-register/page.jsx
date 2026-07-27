import OldSchoolMiracleRegisterKeywordPage, { generateMetadata } from './old-school-miracle-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleRegisterKeywordPage />;
}
