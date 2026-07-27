import FreshStartAmeriaOnlineKeywordPage, { generateMetadata } from './fresh-start-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaOnlineKeywordPage />;
}
