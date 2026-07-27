import Tibia84WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersWikiKeywordPage />;
}
