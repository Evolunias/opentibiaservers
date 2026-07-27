import Tibia772WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersServerListKeywordPage />;
}
