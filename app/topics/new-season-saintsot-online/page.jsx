import NewSeasonSaintsotOnlineKeywordPage, { generateMetadata } from './new-season-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotOnlineKeywordPage />;
}
