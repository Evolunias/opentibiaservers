import BlazeraSeasonalServerMexicoKeywordPage, { generateMetadata } from './blazera-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSeasonalServerMexicoKeywordPage />;
}
