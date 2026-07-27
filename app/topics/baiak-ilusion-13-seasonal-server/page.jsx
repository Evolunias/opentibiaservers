import BaiakIlusion13SeasonalServerKeywordPage, { generateMetadata } from './baiak-ilusion-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion13SeasonalServerKeywordPage />;
}
