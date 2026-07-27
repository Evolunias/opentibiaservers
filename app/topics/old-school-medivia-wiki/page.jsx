import OldSchoolMediviaWikiKeywordPage, { generateMetadata } from './old-school-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaWikiKeywordPage />;
}
