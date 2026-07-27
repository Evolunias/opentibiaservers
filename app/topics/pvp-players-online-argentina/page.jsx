import PvpPlayersOnlineArgentinaKeywordPage, { generateMetadata } from './pvp-players-online-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpPlayersOnlineArgentinaKeywordPage />;
}
