import PopularImperianicOnlineKeywordPage, { generateMetadata } from './popular-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicOnlineKeywordPage />;
}
