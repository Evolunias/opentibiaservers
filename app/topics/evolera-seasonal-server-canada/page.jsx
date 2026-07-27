import EvoleraSeasonalServerCanadaKeywordPage, { generateMetadata } from './evolera-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerCanadaKeywordPage />;
}
