import CarlinotPlayersOnlineKeywordPage, { generateMetadata } from './carlinot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPlayersOnlineKeywordPage />;
}
