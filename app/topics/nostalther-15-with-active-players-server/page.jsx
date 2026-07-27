import Nostalther15WithActivePlayersServerKeywordPage, { generateMetadata } from './nostalther-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther15WithActivePlayersServerKeywordPage />;
}
