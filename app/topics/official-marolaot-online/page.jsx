import OfficialMarolaotOnlineKeywordPage, { generateMetadata } from './official-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMarolaotOnlineKeywordPage />;
}
