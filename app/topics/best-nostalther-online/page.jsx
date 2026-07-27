import BestNostaltherOnlineKeywordPage, { generateMetadata } from './best-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherOnlineKeywordPage />;
}
