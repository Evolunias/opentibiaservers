import PopularDuraOnlineKeywordPage, { generateMetadata } from './popular-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDuraOnlineKeywordPage />;
}
