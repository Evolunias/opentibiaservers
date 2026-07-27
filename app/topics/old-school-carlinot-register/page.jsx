import OldSchoolCarlinotRegisterKeywordPage, { generateMetadata } from './old-school-carlinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotRegisterKeywordPage />;
}
