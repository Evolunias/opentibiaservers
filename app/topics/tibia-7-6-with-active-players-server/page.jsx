import Tibia76WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersServerKeywordPage />;
}
