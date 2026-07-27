import Tibia86WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersForumKeywordPage />;
}
