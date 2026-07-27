import BestKasteriaOnlineKeywordPage, { generateMetadata } from './best-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaOnlineKeywordPage />;
}
