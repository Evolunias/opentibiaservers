import Tibia86WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersClientKeywordPage />;
}
