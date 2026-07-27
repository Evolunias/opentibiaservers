import OldSchoolBlazeraWikiKeywordPage, { generateMetadata } from './old-school-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraWikiKeywordPage />;
}
