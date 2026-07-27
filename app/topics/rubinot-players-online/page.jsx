import RubinotPlayersOnlineKeywordPage, { generateMetadata } from './rubinot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotPlayersOnlineKeywordPage />;
}
