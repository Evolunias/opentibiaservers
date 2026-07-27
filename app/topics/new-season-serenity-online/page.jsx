import NewSeasonSerenityOnlineKeywordPage, { generateMetadata } from './new-season-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityOnlineKeywordPage />;
}
