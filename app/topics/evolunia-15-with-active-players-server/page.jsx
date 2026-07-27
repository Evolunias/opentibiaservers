import Evolunia15WithActivePlayersServerKeywordPage, { generateMetadata } from './evolunia-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia15WithActivePlayersServerKeywordPage />;
}
