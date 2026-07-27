import NewSeasonOtmadnessWebsiteKeywordPage, { generateMetadata } from './new-season-otmadness-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessWebsiteKeywordPage />;
}
