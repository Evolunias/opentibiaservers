import FreshStartCanobOnlineKeywordPage, { generateMetadata } from './fresh-start-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCanobOnlineKeywordPage />;
}
