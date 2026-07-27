import PvpePlayersOnlineBrazilKeywordPage, { generateMetadata } from './pvpe-players-online-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineBrazilKeywordPage />;
}
