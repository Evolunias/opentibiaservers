import EvoleraSeasonalServerPolandKeywordPage, { generateMetadata } from './evolera-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerPolandKeywordPage />;
}
