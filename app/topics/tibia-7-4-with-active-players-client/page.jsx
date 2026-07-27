import Tibia74WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersClientKeywordPage />;
}
