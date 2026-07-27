import DuraOnline14WithActivePlayersServerKeywordPage, { generateMetadata } from './dura-online-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline14WithActivePlayersServerKeywordPage />;
}
