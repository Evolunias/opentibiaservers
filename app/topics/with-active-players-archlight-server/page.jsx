import WithActivePlayersArchlightServerKeywordPage, { generateMetadata } from './with-active-players-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersArchlightServerKeywordPage />;
}
