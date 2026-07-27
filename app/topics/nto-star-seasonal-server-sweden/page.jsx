import NtoStarSeasonalServerSwedenKeywordPage, { generateMetadata } from './nto-star-seasonal-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerSwedenKeywordPage />;
}
