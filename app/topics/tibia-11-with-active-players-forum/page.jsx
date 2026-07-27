import Tibia11WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-11-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersForumKeywordPage />;
}
