import Tibia772WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersServerKeywordPage />;
}
