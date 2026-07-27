import NewSeasonOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './new-season-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessOpenTibiaKeywordPage />;
}
