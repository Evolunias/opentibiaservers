import Thornia80WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80WithActivePlayersServerKeywordPage />;
}
