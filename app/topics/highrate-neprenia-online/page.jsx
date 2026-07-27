import HighrateNepreniaOnlineKeywordPage, { generateMetadata } from './highrate-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaOnlineKeywordPage />;
}
