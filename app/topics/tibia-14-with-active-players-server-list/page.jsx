import Tibia14WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-14-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersServerListKeywordPage />;
}
