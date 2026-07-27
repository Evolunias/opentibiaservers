import Thornia71WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71WithActivePlayersServerKeywordPage />;
}
