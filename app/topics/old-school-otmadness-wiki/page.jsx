import OldSchoolOtmadnessWikiKeywordPage, { generateMetadata } from './old-school-otmadness-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessWikiKeywordPage />;
}
