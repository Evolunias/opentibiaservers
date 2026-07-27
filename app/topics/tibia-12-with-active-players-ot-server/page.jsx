import Tibia12WithActivePlayersOtServerKeywordPage, { generateMetadata } from './tibia-12-with-active-players-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersOtServerKeywordPage />;
}
