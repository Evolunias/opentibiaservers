import NepreniaSeasonalServerPolandKeywordPage, { generateMetadata } from './neprenia-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerPolandKeywordPage />;
}
