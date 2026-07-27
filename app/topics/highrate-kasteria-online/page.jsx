import HighrateKasteriaOnlineKeywordPage, { generateMetadata } from './highrate-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaOnlineKeywordPage />;
}
