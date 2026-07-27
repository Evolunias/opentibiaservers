import Tibia772WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersClientKeywordPage />;
}
