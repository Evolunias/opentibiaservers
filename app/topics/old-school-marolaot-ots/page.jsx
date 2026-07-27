import OldSchoolMarolaotOtsKeywordPage, { generateMetadata } from './old-school-marolaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotOtsKeywordPage />;
}
