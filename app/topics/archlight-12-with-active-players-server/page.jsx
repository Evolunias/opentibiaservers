import Archlight12WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12WithActivePlayersServerKeywordPage />;
}
