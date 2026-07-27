import Tibia100WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersWikiKeywordPage />;
}
