import Nostalther12WithActivePlayersServerKeywordPage, { generateMetadata } from './nostalther-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther12WithActivePlayersServerKeywordPage />;
}
