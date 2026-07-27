import NewSeasonUnlineOnlineKeywordPage, { generateMetadata } from './new-season-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineOnlineKeywordPage />;
}
