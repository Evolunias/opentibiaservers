import Tibia11WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-11-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersServerListKeywordPage />;
}
