import Tibia15WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-15-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersForumKeywordPage />;
}
