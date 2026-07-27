import FreshStartUnlineOnlineKeywordPage, { generateMetadata } from './fresh-start-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineOnlineKeywordPage />;
}
