import BestCoxaotOnlineKeywordPage, { generateMetadata } from './best-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestCoxaotOnlineKeywordPage />;
}
