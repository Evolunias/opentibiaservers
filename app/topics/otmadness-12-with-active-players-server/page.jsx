import Otmadness12WithActivePlayersServerKeywordPage, { generateMetadata } from './otmadness-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12WithActivePlayersServerKeywordPage />;
}
