import Oxygenot13WithActivePlayersServerKeywordPage, { generateMetadata } from './oxygenot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot13WithActivePlayersServerKeywordPage />;
}
