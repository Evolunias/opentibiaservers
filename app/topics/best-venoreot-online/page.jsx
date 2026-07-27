import BestVenoreotOnlineKeywordPage, { generateMetadata } from './best-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotOnlineKeywordPage />;
}
