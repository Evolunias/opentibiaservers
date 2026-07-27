import Archlight76SeasonalServerKeywordPage, { generateMetadata } from './archlight-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight76SeasonalServerKeywordPage />;
}
