import BestZezeniaOnlineKeywordPage, { generateMetadata } from './best-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineKeywordPage />;
}
