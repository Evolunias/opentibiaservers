import Sabrehaven12WithActivePlayersServerKeywordPage, { generateMetadata } from './sabrehaven-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12WithActivePlayersServerKeywordPage />;
}
