import Archlight71WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71WithActivePlayersServerKeywordPage />;
}
