import OldSchoolMadnessaliveWebsiteKeywordPage, { generateMetadata } from './old-school-madnessalive-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveWebsiteKeywordPage />;
}
