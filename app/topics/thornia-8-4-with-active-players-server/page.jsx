import Thornia84WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84WithActivePlayersServerKeywordPage />;
}
