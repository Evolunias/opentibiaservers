import Tibia14WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-14-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersForumKeywordPage />;
}
