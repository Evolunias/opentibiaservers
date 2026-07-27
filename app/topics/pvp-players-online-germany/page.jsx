import PvpPlayersOnlineGermanyKeywordPage, { generateMetadata } from './pvp-players-online-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpPlayersOnlineGermanyKeywordPage />;
}
