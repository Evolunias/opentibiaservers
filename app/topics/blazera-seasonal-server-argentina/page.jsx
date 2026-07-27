import BlazeraSeasonalServerArgentinaKeywordPage, { generateMetadata } from './blazera-seasonal-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraSeasonalServerArgentinaKeywordPage />;
}
