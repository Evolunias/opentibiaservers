import Otmadness15WithActivePlayersServerKeywordPage, { generateMetadata } from './otmadness-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15WithActivePlayersServerKeywordPage />;
}
