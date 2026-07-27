import FreshStartTibiascapeOnlineKeywordPage, { generateMetadata } from './fresh-start-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiascapeOnlineKeywordPage />;
}
