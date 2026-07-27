import CustomMapPlayersOnlineFranceKeywordPage, { generateMetadata } from './custom-map-players-online-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapPlayersOnlineFranceKeywordPage />;
}
