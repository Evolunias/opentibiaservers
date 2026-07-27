import OtmadnessPlayersOnlineKeywordPage, { generateMetadata } from './otmadness-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessPlayersOnlineKeywordPage />;
}
