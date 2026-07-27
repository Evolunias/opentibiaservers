import CarlinotPvpServerPolandKeywordPage, { generateMetadata } from './carlinot-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotPvpServerPolandKeywordPage />;
}
