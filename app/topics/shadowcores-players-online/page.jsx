import ShadowcoresPlayersOnlineKeywordPage, { generateMetadata } from './shadowcores-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresPlayersOnlineKeywordPage />;
}
