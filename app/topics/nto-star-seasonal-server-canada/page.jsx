import NtoStarSeasonalServerCanadaKeywordPage, { generateMetadata } from './nto-star-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerCanadaKeywordPage />;
}
