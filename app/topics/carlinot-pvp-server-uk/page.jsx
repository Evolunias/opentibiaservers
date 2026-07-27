import CarlinotPvpServerUkKeywordPage, { generateMetadata } from './carlinot-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpServerUkKeywordPage />;
}
