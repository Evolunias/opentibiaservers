import Tibia1098WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersClientKeywordPage />;
}
