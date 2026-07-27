import RealMapPlayersOnlineEuropeKeywordPage, { generateMetadata } from './real-map-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapPlayersOnlineEuropeKeywordPage />;
}
