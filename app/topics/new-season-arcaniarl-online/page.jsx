import NewSeasonArcaniarlOnlineKeywordPage, { generateMetadata } from './new-season-arcaniarl-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlOnlineKeywordPage />;
}
