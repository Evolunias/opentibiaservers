import OldSchoolMarolaotWebsiteKeywordPage, { generateMetadata } from './old-school-marolaot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotWebsiteKeywordPage />;
}
