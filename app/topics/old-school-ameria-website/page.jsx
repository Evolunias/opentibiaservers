import OldSchoolAmeriaWebsiteKeywordPage, { generateMetadata } from './old-school-ameria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaWebsiteKeywordPage />;
}
