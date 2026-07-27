import Tibia86ServerWithPlayersKeywordPage, { generateMetadata } from './tibia-8-6-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86ServerWithPlayersKeywordPage />;
}
