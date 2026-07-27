import BlazeraSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './blazera-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSeasonalServerNorthAmericaKeywordPage />;
}
