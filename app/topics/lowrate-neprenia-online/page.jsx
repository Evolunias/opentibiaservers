import LowrateNepreniaOnlineKeywordPage, { generateMetadata } from './lowrate-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNepreniaOnlineKeywordPage />;
}
