import PvpePlayersOnlineSwedenKeywordPage, { generateMetadata } from './pvpe-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineSwedenKeywordPage />;
}
