import AureraGlobal15WithActivePlayersServerKeywordPage, { generateMetadata } from './aurera-global-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal15WithActivePlayersServerKeywordPage />;
}
