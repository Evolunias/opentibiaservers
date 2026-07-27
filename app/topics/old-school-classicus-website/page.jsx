import OldSchoolClassicusWebsiteKeywordPage, { generateMetadata } from './old-school-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusWebsiteKeywordPage />;
}
