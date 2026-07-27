import FreshStartThorniaOnlineKeywordPage, { generateMetadata } from './fresh-start-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaOnlineKeywordPage />;
}
