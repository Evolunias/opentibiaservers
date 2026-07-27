import RuthlessChaosPlayersOnlineKeywordPage, { generateMetadata } from './ruthless-chaos-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuthlessChaosPlayersOnlineKeywordPage />;
}
