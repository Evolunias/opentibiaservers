import RangerSArcaniPlayersOnlineKeywordPage, { generateMetadata } from './ranger-s-arcani-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniPlayersOnlineKeywordPage />;
}
