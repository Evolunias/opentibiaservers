import Evolunia12WithActivePlayersServerKeywordPage, { generateMetadata } from './evolunia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12WithActivePlayersServerKeywordPage />;
}
