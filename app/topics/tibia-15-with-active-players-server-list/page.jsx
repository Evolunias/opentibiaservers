import Tibia15WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-15-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersServerListKeywordPage />;
}
