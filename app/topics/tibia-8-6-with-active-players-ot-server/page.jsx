import Tibia86WithActivePlayersOtServerKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersOtServerKeywordPage />;
}
