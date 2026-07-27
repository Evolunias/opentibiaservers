import Tibia13OldSchoolPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-old-school-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolPlayersOnlineKeywordPage />;
}
