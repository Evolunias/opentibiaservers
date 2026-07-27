import Tibia80WithActivePlayersOtServerKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersOtServerKeywordPage />;
}
