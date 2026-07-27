import CustomMapPlayersOnlineEuropeKeywordPage, { generateMetadata } from './custom-map-players-online-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPlayersOnlineEuropeKeywordPage />;
}
