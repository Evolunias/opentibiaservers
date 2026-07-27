import CarlinotPvpKeywordPage, { generateMetadata } from './carlinot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpKeywordPage />;
}
