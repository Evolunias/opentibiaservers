import Tibia86WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersWikiKeywordPage />;
}
