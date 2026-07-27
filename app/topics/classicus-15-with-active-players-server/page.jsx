import Classicus15WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15WithActivePlayersServerKeywordPage />;
}
