import EvoleraSeasonalServerUkKeywordPage, { generateMetadata } from './evolera-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerUkKeywordPage />;
}
