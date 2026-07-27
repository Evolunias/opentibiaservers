import Archlight13SeasonalServerKeywordPage, { generateMetadata } from './archlight-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13SeasonalServerKeywordPage />;
}
