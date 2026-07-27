import BestImperianicOnlineKeywordPage, { generateMetadata } from './best-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicOnlineKeywordPage />;
}
