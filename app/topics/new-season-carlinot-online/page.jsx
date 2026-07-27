import NewSeasonCarlinotOnlineKeywordPage, { generateMetadata } from './new-season-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotOnlineKeywordPage />;
}
