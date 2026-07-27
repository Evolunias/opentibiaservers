import FreshStartClassicusOnlineKeywordPage, { generateMetadata } from './fresh-start-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusOnlineKeywordPage />;
}
