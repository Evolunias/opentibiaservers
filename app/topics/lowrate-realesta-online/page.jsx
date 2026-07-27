import LowrateRealestaOnlineKeywordPage, { generateMetadata } from './lowrate-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaOnlineKeywordPage />;
}
