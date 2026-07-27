import RealMapPlayersOnlineFranceKeywordPage, { generateMetadata } from './real-map-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapPlayersOnlineFranceKeywordPage />;
}
