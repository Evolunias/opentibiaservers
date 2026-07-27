import FreshStartYurotsOnlineKeywordPage, { generateMetadata } from './fresh-start-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsOnlineKeywordPage />;
}
