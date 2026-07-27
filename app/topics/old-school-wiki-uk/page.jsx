import OldSchoolWikiUkKeywordPage, { generateMetadata } from './old-school-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolWikiUkKeywordPage />;
}
