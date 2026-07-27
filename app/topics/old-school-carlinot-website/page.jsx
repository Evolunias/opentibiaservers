import OldSchoolCarlinotWebsiteKeywordPage, { generateMetadata } from './old-school-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotWebsiteKeywordPage />;
}
