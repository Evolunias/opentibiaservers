import NewCarlinotOnlineKeywordPage, { generateMetadata } from './new-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotOnlineKeywordPage />;
}
