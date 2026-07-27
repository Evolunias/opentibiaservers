import OldSchoolMarolaotOtKeywordPage, { generateMetadata } from './old-school-marolaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotOtKeywordPage />;
}
