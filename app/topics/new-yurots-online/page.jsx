import NewYurotsOnlineKeywordPage, { generateMetadata } from './new-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsOnlineKeywordPage />;
}
