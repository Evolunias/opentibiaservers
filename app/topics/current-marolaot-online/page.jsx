import CurrentMarolaotOnlineKeywordPage, { generateMetadata } from './current-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMarolaotOnlineKeywordPage />;
}
