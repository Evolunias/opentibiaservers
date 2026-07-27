import Archlight14WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14WithActivePlayersServerKeywordPage />;
}
