import LowrateKasteriaOnlineKeywordPage, { generateMetadata } from './lowrate-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaOnlineKeywordPage />;
}
