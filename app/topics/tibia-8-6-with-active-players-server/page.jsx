import Tibia86WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersServerKeywordPage />;
}
