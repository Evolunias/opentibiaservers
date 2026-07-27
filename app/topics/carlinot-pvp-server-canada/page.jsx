import CarlinotPvpServerCanadaKeywordPage, { generateMetadata } from './carlinot-pvp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpServerCanadaKeywordPage />;
}
