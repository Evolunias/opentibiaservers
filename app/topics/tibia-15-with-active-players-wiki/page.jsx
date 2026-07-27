import Tibia15WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-15-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersWikiKeywordPage />;
}
