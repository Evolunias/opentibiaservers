import Tibia14WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersServerKeywordPage />;
}
