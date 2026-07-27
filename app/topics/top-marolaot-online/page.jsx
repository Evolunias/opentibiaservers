import TopMarolaotOnlineKeywordPage, { generateMetadata } from './top-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMarolaotOnlineKeywordPage />;
}
