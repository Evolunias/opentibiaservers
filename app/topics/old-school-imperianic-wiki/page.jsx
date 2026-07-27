import OldSchoolImperianicWikiKeywordPage, { generateMetadata } from './old-school-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicWikiKeywordPage />;
}
