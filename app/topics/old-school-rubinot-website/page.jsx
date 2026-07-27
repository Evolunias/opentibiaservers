import OldSchoolRubinotWebsiteKeywordPage, { generateMetadata } from './old-school-rubinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotWebsiteKeywordPage />;
}
