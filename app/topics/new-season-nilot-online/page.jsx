import NewSeasonNilotOnlineKeywordPage, { generateMetadata } from './new-season-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotOnlineKeywordPage />;
}
