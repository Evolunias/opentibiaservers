import OldSchoolMidhemWebsiteKeywordPage, { generateMetadata } from './old-school-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemWebsiteKeywordPage />;
}
