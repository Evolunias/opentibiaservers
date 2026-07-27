import PopularYurotsOnlineKeywordPage, { generateMetadata } from './popular-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsOnlineKeywordPage />;
}
