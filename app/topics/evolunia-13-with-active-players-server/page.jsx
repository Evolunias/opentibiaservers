import Evolunia13WithActivePlayersServerKeywordPage, { generateMetadata } from './evolunia-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia13WithActivePlayersServerKeywordPage />;
}
