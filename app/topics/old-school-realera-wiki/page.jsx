import OldSchoolRealeraWikiKeywordPage, { generateMetadata } from './old-school-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraWikiKeywordPage />;
}
