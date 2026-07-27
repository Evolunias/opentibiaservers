import Sabrehaven13WithActivePlayersServerKeywordPage, { generateMetadata } from './sabrehaven-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13WithActivePlayersServerKeywordPage />;
}
