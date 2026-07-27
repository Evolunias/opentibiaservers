import BestTibianusOnlineKeywordPage, { generateMetadata } from './best-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusOnlineKeywordPage />;
}
