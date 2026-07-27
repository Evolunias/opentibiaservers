import PvpePlayersOnlineLatinAmericaKeywordPage, { generateMetadata } from './pvpe-players-online-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineLatinAmericaKeywordPage />;
}
