import BaiakIlusionSeasonKeywordPage, { generateMetadata } from './baiak-ilusion-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionSeasonKeywordPage />;
}
