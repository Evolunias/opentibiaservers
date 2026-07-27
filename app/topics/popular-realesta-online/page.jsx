import PopularRealestaOnlineKeywordPage, { generateMetadata } from './popular-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaOnlineKeywordPage />;
}
