import NewSeasonAmeriaOnlineKeywordPage, { generateMetadata } from './new-season-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaOnlineKeywordPage />;
}
