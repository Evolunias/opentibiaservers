import NewSeasonTibijkaOnlineKeywordPage, { generateMetadata } from './new-season-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaOnlineKeywordPage />;
}
