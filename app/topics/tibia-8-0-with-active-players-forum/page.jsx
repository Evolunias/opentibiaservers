import Tibia80WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersForumKeywordPage />;
}
