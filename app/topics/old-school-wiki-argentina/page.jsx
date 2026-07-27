import OldSchoolWikiArgentinaKeywordPage, { generateMetadata } from './old-school-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiArgentinaKeywordPage />;
}
