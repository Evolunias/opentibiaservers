import Tibia80WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersServerKeywordPage />;
}
