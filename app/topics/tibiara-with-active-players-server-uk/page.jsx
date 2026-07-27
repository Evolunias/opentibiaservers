import TibiaraWithActivePlayersServerUkKeywordPage, { generateMetadata } from './tibiara-with-active-players-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithActivePlayersServerUkKeywordPage />;
}
