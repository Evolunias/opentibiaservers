import PvpePlayersOnlineCanadaKeywordPage, { generateMetadata } from './pvpe-players-online-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineCanadaKeywordPage />;
}
