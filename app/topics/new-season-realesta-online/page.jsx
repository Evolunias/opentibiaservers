import NewSeasonRealestaOnlineKeywordPage, { generateMetadata } from './new-season-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaOnlineKeywordPage />;
}
