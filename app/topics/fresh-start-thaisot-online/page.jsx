import FreshStartThaisotOnlineKeywordPage, { generateMetadata } from './fresh-start-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotOnlineKeywordPage />;
}
