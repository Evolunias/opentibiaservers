import BaiakIlusionOnlineKeywordPage, { generateMetadata } from './baiak-ilusion-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionOnlineKeywordPage />;
}
