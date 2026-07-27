import TibianusSeasonalServerGermanyKeywordPage, { generateMetadata } from './tibianus-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSeasonalServerGermanyKeywordPage />;
}
