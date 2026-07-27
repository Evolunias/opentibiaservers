import ClassickDrakoriaPlayersOnlineKeywordPage, { generateMetadata } from './classick-drakoria-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaPlayersOnlineKeywordPage />;
}
