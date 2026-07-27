import CarlinotSeasonalServerUsaKeywordPage, { generateMetadata } from './carlinot-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotSeasonalServerUsaKeywordPage />;
}
