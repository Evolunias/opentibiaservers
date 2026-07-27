import PopularArchlightOnlineKeywordPage, { generateMetadata } from './popular-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightOnlineKeywordPage />;
}
