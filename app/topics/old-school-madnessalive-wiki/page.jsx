import OldSchoolMadnessaliveWikiKeywordPage, { generateMetadata } from './old-school-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveWikiKeywordPage />;
}
