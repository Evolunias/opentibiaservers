import Tibia13WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-13-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersForumKeywordPage />;
}
