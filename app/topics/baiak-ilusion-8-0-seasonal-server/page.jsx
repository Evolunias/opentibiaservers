import BaiakIlusion80SeasonalServerKeywordPage, { generateMetadata } from './baiak-ilusion-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion80SeasonalServerKeywordPage />;
}
