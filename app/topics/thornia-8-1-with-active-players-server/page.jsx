import Thornia81WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81WithActivePlayersServerKeywordPage />;
}
