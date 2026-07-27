import OldSchoolWikiEuropeKeywordPage, { generateMetadata } from './old-school-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiEuropeKeywordPage />;
}
