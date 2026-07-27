import EvoleraSeasonalServerFranceKeywordPage, { generateMetadata } from './evolera-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerFranceKeywordPage />;
}
