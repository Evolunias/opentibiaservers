import FreshStartZezeniaOnlineKeywordPage, { generateMetadata } from './fresh-start-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartZezeniaOnlineKeywordPage />;
}
