import FreshStartNtoStarOnlineKeywordPage, { generateMetadata } from './fresh-start-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarOnlineKeywordPage />;
}
