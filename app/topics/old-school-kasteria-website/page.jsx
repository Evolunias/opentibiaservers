import OldSchoolKasteriaWebsiteKeywordPage, { generateMetadata } from './old-school-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaWebsiteKeywordPage />;
}
