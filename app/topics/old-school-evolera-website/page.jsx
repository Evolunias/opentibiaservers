import OldSchoolEvoleraWebsiteKeywordPage, { generateMetadata } from './old-school-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraWebsiteKeywordPage />;
}
