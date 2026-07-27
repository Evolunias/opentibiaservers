import LowrateNostaltherOnlineKeywordPage, { generateMetadata } from './lowrate-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherOnlineKeywordPage />;
}
