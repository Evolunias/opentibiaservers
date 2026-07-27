import OldSchoolOxygenotWebsiteKeywordPage, { generateMetadata } from './old-school-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotWebsiteKeywordPage />;
}
