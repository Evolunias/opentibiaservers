import Thornia14WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14WithActivePlayersServerKeywordPage />;
}
