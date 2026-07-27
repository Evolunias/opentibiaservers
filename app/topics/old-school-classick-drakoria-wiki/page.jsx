import OldSchoolClassickDrakoriaWikiKeywordPage, { generateMetadata } from './old-school-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaWikiKeywordPage />;
}
