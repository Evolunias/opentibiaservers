import OldSchoolBlazeraWebsiteKeywordPage, { generateMetadata } from './old-school-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraWebsiteKeywordPage />;
}
