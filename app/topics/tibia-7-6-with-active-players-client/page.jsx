import Tibia76WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersClientKeywordPage />;
}
