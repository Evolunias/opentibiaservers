import Tibia854WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-8-54-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithActivePlayersClientKeywordPage />;
}
