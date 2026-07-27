import BlazeraSeasonalServerFranceKeywordPage, { generateMetadata } from './blazera-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSeasonalServerFranceKeywordPage />;
}
