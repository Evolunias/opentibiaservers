import NewSeasonCanobOnlineKeywordPage, { generateMetadata } from './new-season-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobOnlineKeywordPage />;
}
