import OldSchoolAlasteraWebsiteKeywordPage, { generateMetadata } from './old-school-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraWebsiteKeywordPage />;
}
