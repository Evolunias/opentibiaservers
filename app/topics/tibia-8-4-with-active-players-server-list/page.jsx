import Tibia84WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersServerListKeywordPage />;
}
