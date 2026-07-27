import Tibia14WithActivePlayersOtServerKeywordPage, { generateMetadata } from './tibia-14-with-active-players-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersOtServerKeywordPage />;
}
