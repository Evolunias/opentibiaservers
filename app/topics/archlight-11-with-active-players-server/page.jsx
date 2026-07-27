import Archlight11WithActivePlayersServerKeywordPage, { generateMetadata } from './archlight-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11WithActivePlayersServerKeywordPage />;
}
