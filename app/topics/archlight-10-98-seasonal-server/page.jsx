import Archlight1098SeasonalServerKeywordPage, { generateMetadata } from './archlight-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight1098SeasonalServerKeywordPage />;
}
