import BestRubinotOnlineKeywordPage, { generateMetadata } from './best-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotOnlineKeywordPage />;
}
