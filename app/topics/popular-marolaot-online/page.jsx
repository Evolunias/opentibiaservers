import PopularMarolaotOnlineKeywordPage, { generateMetadata } from './popular-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMarolaotOnlineKeywordPage />;
}
