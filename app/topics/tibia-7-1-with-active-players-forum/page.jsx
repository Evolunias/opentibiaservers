import Tibia71WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersForumKeywordPage />;
}
