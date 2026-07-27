import Tibia854WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-8-54-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithActivePlayersServerListKeywordPage />;
}
