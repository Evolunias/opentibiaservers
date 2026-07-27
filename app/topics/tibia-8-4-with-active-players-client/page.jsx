import Tibia84WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersClientKeywordPage />;
}
