import Tibia80WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersWikiKeywordPage />;
}
