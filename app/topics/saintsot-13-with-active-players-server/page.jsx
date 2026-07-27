import Saintsot13WithActivePlayersServerKeywordPage, { generateMetadata } from './saintsot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13WithActivePlayersServerKeywordPage />;
}
