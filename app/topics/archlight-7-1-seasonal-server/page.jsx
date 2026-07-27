import Archlight71SeasonalServerKeywordPage, { generateMetadata } from './archlight-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71SeasonalServerKeywordPage />;
}
