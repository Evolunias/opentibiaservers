import ClassicusPlayersOnlineKeywordPage, { generateMetadata } from './classicus-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPlayersOnlineKeywordPage />;
}
