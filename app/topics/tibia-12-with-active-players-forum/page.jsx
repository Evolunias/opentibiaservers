import Tibia12WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-12-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersForumKeywordPage />;
}
