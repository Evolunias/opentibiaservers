import PvpEnforcedPlayersOnlineUkKeywordPage, { generateMetadata } from './pvp-enforced-players-online-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedPlayersOnlineUkKeywordPage />;
}
