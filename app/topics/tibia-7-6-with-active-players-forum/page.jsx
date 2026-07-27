import Tibia76WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersForumKeywordPage />;
}
