import OldSchoolCanobWebsiteKeywordPage, { generateMetadata } from './old-school-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobWebsiteKeywordPage />;
}
