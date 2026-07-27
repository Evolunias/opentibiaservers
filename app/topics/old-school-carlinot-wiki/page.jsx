import OldSchoolCarlinotWikiKeywordPage, { generateMetadata } from './old-school-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotWikiKeywordPage />;
}
