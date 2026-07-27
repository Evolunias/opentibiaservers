import PvpPlayersOnlineUkKeywordPage, { generateMetadata } from './pvp-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpPlayersOnlineUkKeywordPage />;
}
