import Tibia14WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-14-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersWikiKeywordPage />;
}
