import OldSchoolNepreniaWebsiteKeywordPage, { generateMetadata } from './old-school-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaWebsiteKeywordPage />;
}
