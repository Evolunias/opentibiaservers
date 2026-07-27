import LowExpPlayersOnlineEuropeKeywordPage, { generateMetadata } from './low-exp-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpPlayersOnlineEuropeKeywordPage />;
}
