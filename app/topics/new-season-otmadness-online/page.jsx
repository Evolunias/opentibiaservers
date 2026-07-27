import NewSeasonOtmadnessOnlineKeywordPage, { generateMetadata } from './new-season-otmadness-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessOnlineKeywordPage />;
}
