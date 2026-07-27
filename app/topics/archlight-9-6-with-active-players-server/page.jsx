import Archlight96WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight96WithActivePlayersServerKeywordPage />;
}
