import NtoStarSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './nto-star-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerNorthAmericaKeywordPage />;
}
