import TibiaraWithActivePlayersServerGermanyKeywordPage, { generateMetadata } from './tibiara-with-active-players-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWithActivePlayersServerGermanyKeywordPage />;
}
