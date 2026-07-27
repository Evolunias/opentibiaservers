import FreshStartTibianusOnlineKeywordPage, { generateMetadata } from './fresh-start-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusOnlineKeywordPage />;
}
