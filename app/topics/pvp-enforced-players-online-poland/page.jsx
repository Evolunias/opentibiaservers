import PvpEnforcedPlayersOnlinePolandKeywordPage, { generateMetadata } from './pvp-enforced-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedPlayersOnlinePolandKeywordPage />;
}
