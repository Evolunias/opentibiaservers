import Tibia81WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersForumKeywordPage />;
}
