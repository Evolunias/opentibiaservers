import NepreniaSeasonalServerCanadaKeywordPage, { generateMetadata } from './neprenia-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerCanadaKeywordPage />;
}
