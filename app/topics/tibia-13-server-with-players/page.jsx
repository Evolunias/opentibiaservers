import Tibia13ServerWithPlayersKeywordPage, { generateMetadata } from './tibia-13-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13ServerWithPlayersKeywordPage />;
}
