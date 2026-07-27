import NewSeasonClassicusOnlineKeywordPage, { generateMetadata } from './new-season-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusOnlineKeywordPage />;
}
