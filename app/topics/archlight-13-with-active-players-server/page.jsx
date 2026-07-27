import Archlight13WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13WithActivePlayersServerKeywordPage />;
}
