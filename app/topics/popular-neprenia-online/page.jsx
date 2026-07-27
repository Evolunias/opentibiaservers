import PopularNepreniaOnlineKeywordPage, { generateMetadata } from './popular-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaOnlineKeywordPage />;
}
