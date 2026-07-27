import Tibia96WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersForumKeywordPage />;
}
