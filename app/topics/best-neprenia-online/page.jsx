import BestNepreniaOnlineKeywordPage, { generateMetadata } from './best-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaOnlineKeywordPage />;
}
