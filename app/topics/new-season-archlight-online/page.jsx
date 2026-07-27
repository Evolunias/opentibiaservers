import NewSeasonArchlightOnlineKeywordPage, { generateMetadata } from './new-season-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightOnlineKeywordPage />;
}
