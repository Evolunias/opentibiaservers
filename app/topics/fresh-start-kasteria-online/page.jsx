import FreshStartKasteriaOnlineKeywordPage, { generateMetadata } from './fresh-start-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartKasteriaOnlineKeywordPage />;
}
