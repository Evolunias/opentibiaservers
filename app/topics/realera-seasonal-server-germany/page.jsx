import RealeraSeasonalServerGermanyKeywordPage, { generateMetadata } from './realera-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerGermanyKeywordPage />;
}
