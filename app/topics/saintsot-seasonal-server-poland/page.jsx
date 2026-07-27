import SaintsotSeasonalServerPolandKeywordPage, { generateMetadata } from './saintsot-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSeasonalServerPolandKeywordPage />;
}
