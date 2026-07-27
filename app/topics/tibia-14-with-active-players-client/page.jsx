import Tibia14WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-14-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersClientKeywordPage />;
}
