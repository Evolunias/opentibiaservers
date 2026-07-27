import Tibia13WithActivePlayersOtServerKeywordPage, { generateMetadata } from './tibia-13-with-active-players-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersOtServerKeywordPage />;
}
