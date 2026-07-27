import Tibia81WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersWikiKeywordPage />;
}
