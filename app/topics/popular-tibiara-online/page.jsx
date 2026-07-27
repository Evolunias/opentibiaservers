import PopularTibiaraOnlineKeywordPage, { generateMetadata } from './popular-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraOnlineKeywordPage />;
}
