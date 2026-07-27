import Tibia84WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersForumKeywordPage />;
}
