import PvpePlayersOnlineUsaKeywordPage, { generateMetadata } from './pvpe-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineUsaKeywordPage />;
}
