import Nostalther13WithActivePlayersServerKeywordPage, { generateMetadata } from './nostalther-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther13WithActivePlayersServerKeywordPage />;
}
