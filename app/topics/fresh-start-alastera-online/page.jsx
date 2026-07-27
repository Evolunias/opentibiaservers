import FreshStartAlasteraOnlineKeywordPage, { generateMetadata } from './fresh-start-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraOnlineKeywordPage />;
}
