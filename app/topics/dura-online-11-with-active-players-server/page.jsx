import DuraOnline11WithActivePlayersServerKeywordPage, { generateMetadata } from './dura-online-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline11WithActivePlayersServerKeywordPage />;
}
