import Tibia100WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersClientKeywordPage />;
}
