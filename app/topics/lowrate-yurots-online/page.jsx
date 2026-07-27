import LowrateYurotsOnlineKeywordPage, { generateMetadata } from './lowrate-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateYurotsOnlineKeywordPage />;
}
