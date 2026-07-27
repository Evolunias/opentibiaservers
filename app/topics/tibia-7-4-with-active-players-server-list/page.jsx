import Tibia74WithActivePlayersServerListKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersServerListKeywordPage />;
}
