import SaintsotSeasonalServerGermanyKeywordPage, { generateMetadata } from './saintsot-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSeasonalServerGermanyKeywordPage />;
}
