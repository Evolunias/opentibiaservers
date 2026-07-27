import NonPvpPlayersOnlineGermanyKeywordPage, { generateMetadata } from './non-pvp-players-online-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpPlayersOnlineGermanyKeywordPage />;
}
