import OldSchoolAlasteraWikiKeywordPage, { generateMetadata } from './old-school-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraWikiKeywordPage />;
}
