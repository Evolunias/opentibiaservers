import NewMarolaotOnlineKeywordPage, { generateMetadata } from './new-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMarolaotOnlineKeywordPage />;
}
