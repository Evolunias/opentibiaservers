import OldSchoolYurotsWebsiteKeywordPage, { generateMetadata } from './old-school-yurots-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsWebsiteKeywordPage />;
}
