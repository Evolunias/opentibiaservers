import Nostalther11WithActivePlayersServerKeywordPage, { generateMetadata } from './nostalther-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther11WithActivePlayersServerKeywordPage />;
}
