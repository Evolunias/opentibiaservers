import OldSchoolWikiGermanyKeywordPage, { generateMetadata } from './old-school-wiki-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiGermanyKeywordPage />;
}
