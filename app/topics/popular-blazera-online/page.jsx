import PopularBlazeraOnlineKeywordPage, { generateMetadata } from './popular-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraOnlineKeywordPage />;
}
