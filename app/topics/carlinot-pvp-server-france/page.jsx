import CarlinotPvpServerFranceKeywordPage, { generateMetadata } from './carlinot-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpServerFranceKeywordPage />;
}
