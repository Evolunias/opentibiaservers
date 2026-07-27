import NewSeasonOtmadnessOfficialKeywordPage, { generateMetadata } from './new-season-otmadness-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessOfficialKeywordPage />;
}
