import Otmadness13WithActivePlayersServerKeywordPage, { generateMetadata } from './otmadness-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13WithActivePlayersServerKeywordPage />;
}
