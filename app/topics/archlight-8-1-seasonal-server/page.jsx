import Archlight81SeasonalServerKeywordPage, { generateMetadata } from './archlight-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight81SeasonalServerKeywordPage />;
}
