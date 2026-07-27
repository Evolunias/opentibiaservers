import BestTibiantisOnlineKeywordPage, { generateMetadata } from './best-tibiantis-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisOnlineKeywordPage />;
}
