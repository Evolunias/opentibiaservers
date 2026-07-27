import Tibia12WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-12-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersWikiKeywordPage />;
}
