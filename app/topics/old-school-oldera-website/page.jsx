import OldSchoolOlderaWebsiteKeywordPage, { generateMetadata } from './old-school-oldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaWebsiteKeywordPage />;
}
