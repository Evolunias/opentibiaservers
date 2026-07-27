import NepreniaSeasonalServerUkKeywordPage, { generateMetadata } from './neprenia-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerUkKeywordPage />;
}
