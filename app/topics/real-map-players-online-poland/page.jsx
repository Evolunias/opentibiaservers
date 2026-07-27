import RealMapPlayersOnlinePolandKeywordPage, { generateMetadata } from './real-map-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapPlayersOnlinePolandKeywordPage />;
}
