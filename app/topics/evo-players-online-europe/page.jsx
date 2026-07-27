import EvoPlayersOnlineEuropeKeywordPage, { generateMetadata } from './evo-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineEuropeKeywordPage />;
}
