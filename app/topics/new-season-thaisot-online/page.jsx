import NewSeasonThaisotOnlineKeywordPage, { generateMetadata } from './new-season-thaisot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotOnlineKeywordPage />;
}
