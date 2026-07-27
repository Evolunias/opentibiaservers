import Tibiara12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiara-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12WithActivePlayersServerKeywordPage />;
}
