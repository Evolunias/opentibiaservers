import Tibia100WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersForumKeywordPage />;
}
