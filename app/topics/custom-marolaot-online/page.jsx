import CustomMarolaotOnlineKeywordPage, { generateMetadata } from './custom-marolaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMarolaotOnlineKeywordPage />;
}
