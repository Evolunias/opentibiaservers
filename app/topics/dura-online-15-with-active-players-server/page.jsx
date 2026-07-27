import DuraOnline15WithActivePlayersServerKeywordPage, { generateMetadata } from './dura-online-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline15WithActivePlayersServerKeywordPage />;
}
