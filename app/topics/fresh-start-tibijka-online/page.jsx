import FreshStartTibijkaOnlineKeywordPage, { generateMetadata } from './fresh-start-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaOnlineKeywordPage />;
}
