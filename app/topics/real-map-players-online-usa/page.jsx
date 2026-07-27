import RealMapPlayersOnlineUsaKeywordPage, { generateMetadata } from './real-map-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapPlayersOnlineUsaKeywordPage />;
}
