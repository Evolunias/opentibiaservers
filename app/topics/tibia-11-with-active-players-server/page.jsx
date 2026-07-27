import Tibia11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersServerKeywordPage />;
}
