import Tibia1098WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersWikiKeywordPage />;
}
