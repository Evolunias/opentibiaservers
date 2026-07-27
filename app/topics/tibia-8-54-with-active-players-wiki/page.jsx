import Tibia854WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-8-54-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithActivePlayersWikiKeywordPage />;
}
