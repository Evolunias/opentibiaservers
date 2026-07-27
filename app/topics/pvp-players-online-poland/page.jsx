import PvpPlayersOnlinePolandKeywordPage, { generateMetadata } from './pvp-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpPlayersOnlinePolandKeywordPage />;
}
