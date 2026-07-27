import BestTibijkaOnlineKeywordPage, { generateMetadata } from './best-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaOnlineKeywordPage />;
}
