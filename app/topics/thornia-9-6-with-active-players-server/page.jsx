import Thornia96WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96WithActivePlayersServerKeywordPage />;
}
