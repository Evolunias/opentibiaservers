import PopularAlasteraOnlineKeywordPage, { generateMetadata } from './popular-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraOnlineKeywordPage />;
}
