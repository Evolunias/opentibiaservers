import Tibia15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersServerKeywordPage />;
}
