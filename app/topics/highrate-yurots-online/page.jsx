import HighrateYurotsOnlineKeywordPage, { generateMetadata } from './highrate-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsOnlineKeywordPage />;
}
