import OldSchoolWikiPolandKeywordPage, { generateMetadata } from './old-school-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiPolandKeywordPage />;
}
