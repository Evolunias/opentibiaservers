import Sabrehaven15WithActivePlayersServerKeywordPage, { generateMetadata } from './sabrehaven-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15WithActivePlayersServerKeywordPage />;
}
