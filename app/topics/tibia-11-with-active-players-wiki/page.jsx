import Tibia11WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-11-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersWikiKeywordPage />;
}
