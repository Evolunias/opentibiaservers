import Archlight74SeasonalServerKeywordPage, { generateMetadata } from './archlight-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight74SeasonalServerKeywordPage />;
}
