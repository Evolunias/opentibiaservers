import BestOxygenotOnlineKeywordPage, { generateMetadata } from './best-oxygenot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotOnlineKeywordPage />;
}
