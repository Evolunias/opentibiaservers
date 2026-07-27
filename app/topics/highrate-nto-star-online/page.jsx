import HighrateNtoStarOnlineKeywordPage, { generateMetadata } from './highrate-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNtoStarOnlineKeywordPage />;
}
