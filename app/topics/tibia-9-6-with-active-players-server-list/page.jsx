import Tibia96WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersServerListKeywordPage />;
}
