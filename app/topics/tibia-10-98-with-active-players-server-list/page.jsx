import Tibia1098WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersServerListKeywordPage />;
}
