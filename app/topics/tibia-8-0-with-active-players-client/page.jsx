import Tibia80WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersClientKeywordPage />;
}
