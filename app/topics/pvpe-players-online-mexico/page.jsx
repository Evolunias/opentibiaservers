import PvpePlayersOnlineMexicoKeywordPage, { generateMetadata } from './pvpe-players-online-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineMexicoKeywordPage />;
}
