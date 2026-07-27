import BestTibiameOnlineKeywordPage, { generateMetadata } from './best-tibiame-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameOnlineKeywordPage />;
}
