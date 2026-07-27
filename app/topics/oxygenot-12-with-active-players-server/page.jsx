import Oxygenot12WithActivePlayersServerKeywordPage, { generateMetadata } from './oxygenot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot12WithActivePlayersServerKeywordPage />;
}
