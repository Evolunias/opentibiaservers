import Thornia100WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100WithActivePlayersServerKeywordPage />;
}
