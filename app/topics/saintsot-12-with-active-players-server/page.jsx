import Saintsot12WithActivePlayersServerKeywordPage, { generateMetadata } from './saintsot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12WithActivePlayersServerKeywordPage />;
}
