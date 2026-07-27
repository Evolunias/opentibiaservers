import Tibia74WithActivePlayersWikiKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersWikiKeywordPage />;
}
