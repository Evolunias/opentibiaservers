import Archlight15WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15WithActivePlayersServerKeywordPage />;
}
