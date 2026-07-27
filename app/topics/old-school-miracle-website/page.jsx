import OldSchoolMiracleWebsiteKeywordPage, { generateMetadata } from './old-school-miracle-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleWebsiteKeywordPage />;
}
