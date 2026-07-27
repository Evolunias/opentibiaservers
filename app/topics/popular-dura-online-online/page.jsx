import PopularDuraOnlineOnlineKeywordPage, { generateMetadata } from './popular-dura-online-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDuraOnlineOnlineKeywordPage />;
}
