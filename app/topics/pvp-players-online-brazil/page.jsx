import PvpPlayersOnlineBrazilKeywordPage, { generateMetadata } from './pvp-players-online-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpPlayersOnlineBrazilKeywordPage />;
}
