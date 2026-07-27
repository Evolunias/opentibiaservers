import SeasonalBaiakIlusionServerKeywordPage, { generateMetadata } from './seasonal-baiak-ilusion-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalBaiakIlusionServerKeywordPage />;
}
