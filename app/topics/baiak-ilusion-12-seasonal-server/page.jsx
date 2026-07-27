import BaiakIlusion12SeasonalServerKeywordPage, { generateMetadata } from './baiak-ilusion-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusion12SeasonalServerKeywordPage />;
}
