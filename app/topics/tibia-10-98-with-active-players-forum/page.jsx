import Tibia1098WithActivePlayersForumKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersForumKeywordPage />;
}
