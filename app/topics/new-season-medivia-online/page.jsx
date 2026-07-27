import NewSeasonMediviaOnlineKeywordPage, { generateMetadata } from './new-season-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaOnlineKeywordPage />;
}
