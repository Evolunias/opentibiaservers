import BestElderaOnlineKeywordPage, { generateMetadata } from './best-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOnlineKeywordPage />;
}
