import CarlinotSeasonalServerBrazilKeywordPage, { generateMetadata } from './carlinot-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSeasonalServerBrazilKeywordPage />;
}
