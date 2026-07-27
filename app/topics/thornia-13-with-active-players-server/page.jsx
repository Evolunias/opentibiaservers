import Thornia13WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13WithActivePlayersServerKeywordPage />;
}
