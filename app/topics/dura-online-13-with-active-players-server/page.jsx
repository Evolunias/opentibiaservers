import DuraOnline13WithActivePlayersServerKeywordPage, { generateMetadata } from './dura-online-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline13WithActivePlayersServerKeywordPage />;
}
