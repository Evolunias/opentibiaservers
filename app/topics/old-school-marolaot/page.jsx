import OldSchoolMarolaotKeywordPage, { generateMetadata } from './old-school-marolaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotKeywordPage />;
}
