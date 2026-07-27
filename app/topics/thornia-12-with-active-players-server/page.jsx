import Thornia12WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12WithActivePlayersServerKeywordPage />;
}
