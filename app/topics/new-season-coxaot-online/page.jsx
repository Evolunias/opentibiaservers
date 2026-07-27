import NewSeasonCoxaotOnlineKeywordPage, { generateMetadata } from './new-season-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCoxaotOnlineKeywordPage />;
}
