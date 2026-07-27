import BaiakIlusion14SeasonalServerKeywordPage, { generateMetadata } from './baiak-ilusion-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion14SeasonalServerKeywordPage />;
}
