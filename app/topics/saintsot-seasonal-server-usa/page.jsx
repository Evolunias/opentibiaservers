import SaintsotSeasonalServerUsaKeywordPage, { generateMetadata } from './saintsot-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotSeasonalServerUsaKeywordPage />;
}
