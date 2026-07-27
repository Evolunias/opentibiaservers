import Tibiara14WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiara-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14WithActivePlayersServerKeywordPage />;
}
