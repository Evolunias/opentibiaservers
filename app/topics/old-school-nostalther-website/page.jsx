import OldSchoolNostaltherWebsiteKeywordPage, { generateMetadata } from './old-school-nostalther-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherWebsiteKeywordPage />;
}
