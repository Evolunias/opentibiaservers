import CustomBaiakIlusionOnlineKeywordPage, { generateMetadata } from './custom-baiak-ilusion-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBaiakIlusionOnlineKeywordPage />;
}
