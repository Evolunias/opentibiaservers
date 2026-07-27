import EvoluniaPlayersOnlineKeywordPage, { generateMetadata } from './evolunia-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaPlayersOnlineKeywordPage />;
}
