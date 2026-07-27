import Tibia772WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersWikiKeywordPage />;
}
