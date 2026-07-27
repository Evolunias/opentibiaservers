import PvpePlayersOnlineFranceKeywordPage, { generateMetadata } from './pvpe-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpePlayersOnlineFranceKeywordPage />;
}
