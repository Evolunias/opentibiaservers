import Thornia15WithActivePlayersServerKeywordPage, { generateMetadata } from './thornia-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15WithActivePlayersServerKeywordPage />;
}
