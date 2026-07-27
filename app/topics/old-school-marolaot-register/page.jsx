import OldSchoolMarolaotRegisterKeywordPage, { generateMetadata } from './old-school-marolaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotRegisterKeywordPage />;
}
