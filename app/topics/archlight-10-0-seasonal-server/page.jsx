import Archlight100SeasonalServerKeywordPage, { generateMetadata } from './archlight-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight100SeasonalServerKeywordPage />;
}
