import SaintsotSeasonalServerCanadaKeywordPage, { generateMetadata } from './saintsot-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSeasonalServerCanadaKeywordPage />;
}
