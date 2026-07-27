import PopularRealeraOnlineKeywordPage, { generateMetadata } from './popular-realera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraOnlineKeywordPage />;
}
