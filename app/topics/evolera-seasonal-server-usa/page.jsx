import EvoleraSeasonalServerUsaKeywordPage, { generateMetadata } from './evolera-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonalServerUsaKeywordPage />;
}
