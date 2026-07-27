import OldSchoolMistOfDeathWikiKeywordPage, { generateMetadata } from './old-school-mist-of-death-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathWikiKeywordPage />;
}
