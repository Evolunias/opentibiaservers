import OldSchoolRealestaWebsiteKeywordPage, { generateMetadata } from './old-school-realesta-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaWebsiteKeywordPage />;
}
