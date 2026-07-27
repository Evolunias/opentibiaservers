import MadnessalivePlayersOnlineKeywordPage, { generateMetadata } from './madnessalive-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessalivePlayersOnlineKeywordPage />;
}
