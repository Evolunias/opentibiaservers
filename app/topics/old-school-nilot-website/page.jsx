import OldSchoolNilotWebsiteKeywordPage, { generateMetadata } from './old-school-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotWebsiteKeywordPage />;
}
