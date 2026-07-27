import NewSeasonTibianusOnlineKeywordPage, { generateMetadata } from './new-season-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibianusOnlineKeywordPage />;
}
