import Tibia15WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-15-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersClientKeywordPage />;
}
