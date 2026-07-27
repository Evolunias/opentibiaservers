import CarlinotSeasonKeywordPage, { generateMetadata } from './carlinot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSeasonKeywordPage />;
}
