import Archlight14SeasonalServerKeywordPage, { generateMetadata } from './archlight-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14SeasonalServerKeywordPage />;
}
