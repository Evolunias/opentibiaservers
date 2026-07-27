import BaiakIlusion11SeasonalServerKeywordPage, { generateMetadata } from './baiak-ilusion-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion11SeasonalServerKeywordPage />;
}
