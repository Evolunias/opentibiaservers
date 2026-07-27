import ArcaniarlPlayersOnlineKeywordPage, { generateMetadata } from './arcaniarl-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlPlayersOnlineKeywordPage />;
}
