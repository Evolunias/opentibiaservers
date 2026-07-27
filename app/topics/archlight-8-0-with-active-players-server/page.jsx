import Archlight80WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80WithActivePlayersServerKeywordPage />;
}
