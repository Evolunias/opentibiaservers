import BestBlazeraOnlineKeywordPage, { generateMetadata } from './best-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestBlazeraOnlineKeywordPage />;
}
