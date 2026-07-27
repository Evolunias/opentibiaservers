import OpenTibiaServerListWithPlayersKeywordPage, { generateMetadata } from './open-tibia-server-list-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServerListWithPlayersKeywordPage />;
}
