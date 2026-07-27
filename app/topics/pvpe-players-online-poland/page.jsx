import PvpePlayersOnlinePolandKeywordPage, { generateMetadata } from './pvpe-players-online-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlinePolandKeywordPage />;
}
