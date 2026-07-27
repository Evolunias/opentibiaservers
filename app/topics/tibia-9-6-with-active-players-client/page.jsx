import Tibia96WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersClientKeywordPage />;
}
