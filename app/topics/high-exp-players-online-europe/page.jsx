import HighExpPlayersOnlineEuropeKeywordPage, { generateMetadata } from './high-exp-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpPlayersOnlineEuropeKeywordPage />;
}
