import FreshStartArcaniarlOnlineKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlOnlineKeywordPage />;
}
