import TopYurotsOnlineKeywordPage, { generateMetadata } from './top-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsOnlineKeywordPage />;
}
