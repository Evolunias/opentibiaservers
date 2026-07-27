import FreshStartNilotOnlineKeywordPage, { generateMetadata } from './fresh-start-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotOnlineKeywordPage />;
}
