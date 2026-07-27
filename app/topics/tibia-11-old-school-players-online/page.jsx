import Tibia11OldSchoolPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-old-school-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolPlayersOnlineKeywordPage />;
}
