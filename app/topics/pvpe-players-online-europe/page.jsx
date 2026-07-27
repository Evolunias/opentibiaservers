import PvpePlayersOnlineEuropeKeywordPage, { generateMetadata } from './pvpe-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineEuropeKeywordPage />;
}
